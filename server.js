const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/server/v1/:id', async (req, res) => {
    const videoId = req.params.id;
    const api1Url = `https://alkaline-oil-baboon.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。' });
    }
});
app.get('/api/server/v2/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://band-lumbar-splash.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。' });
    }
});
app.get('/api/server/v3/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://witty-courageous-cardinal.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。' });
    }
});
app.get('/api/server/v4/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://pineapple-butternut-leo.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。' });
    }
});
app.get('/api/server/v5/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://viridian-celestial-weaver.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。' });
    }
});
app.get('/api/server/v6/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://ultra-marsh-tune.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。また、このサーバーはまだ不完全なので、動作しない可能性がありすぎ。' });
    }
});
app.get('/api/server/v7/:id', async (req, res) => {
    const videoId = req.params.id; 
    const api1Url = `https://deluxe-bedecked-dresser.glitch.me/api/${videoId}`;
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
        res.status(500).json({ error: 'エラー。サーバーがダウンしている可能性があるので、何回かは読み込み直してみてください。また、このサーバーはまだ不完全なので、動作しない可能性がありすぎ。' });
    }
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
