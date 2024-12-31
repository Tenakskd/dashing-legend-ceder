const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/:id', async (req, res) => {
    const videoId = req.params.id;
    const api1Url = `https://emphasized-fluttering-almond.glitch.me/api/${videoId}`;
    const api2Url = `https://super-sixth-stilton.glitch.me/api/${videoId}`;

    try {
        // 最初のAPIからデータを取得
        const response1 = await axios.get(api1Url);
        const data1 = response1.data; // ここではdata1を使っていないことに注意

        // 次のAPIからデータを取得
        const response2 = await axios.get(api2Url);
        const data2 = response2.data; // ここではdata2を使っていないことに注意

        // 両方のデータをマージして1つのオブジェクトにまとめる
        const combinedData = { ...data1, ...data2 };

        // 結果を返す
        res.json(combinedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'データの取得中に問題が発生しました。' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
