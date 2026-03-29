# infosec_midterm

## Çalıştırma

```bash
python3 -m http.server 8000
```

Tarayıcı: `http://localhost:8000/index.html`

## Soru Verisi

- Uygulama soruları `questions.json` dosyasından okur.
- Kaynak markdown değişirse JSON'u yeniden üret:

```bash
node scripts/build-questions-json.js
```
