# ESN Türkiye NDC - Katkı Rehberi

Hoş geldiniz! Bu proje **ESN Türkiye** bünyesinde geliştirilmektedir. Kaliteli bir ürün için aşağıdaki kurallara uyalım.

---

## Product & Growth Team
*(Tasarımcılar, İçerik Editörleri, QA ve WPA Koordinatörleri)*

### Yeni İş veya Hata Bildirimi
1. **Issues** sekmesine gidin → **New Issue** → Uygun şablonu seçin
2. Şablonu doldurun (ekran görüntüsü eklemeyi unutmayın!)
3. **Projects** panosunda takip edin

### İş Takibi
**Projects** → **ESN Türkiye NDC Development** panosunda:
- **Backlog:** Henüz sırası gelmemiş işler
- **Todo:** Yapılacak onaylanmış işler
- **In Review:** Kontrol edilmesi gereken işler
- **Done:** Tamamlanan işler

---

## Developers
*(Frontend, Backend ve Mobil Geliştiriciler)*

### ⚠️ Altın Kural: `main` Branch Kutsaldır!
Asla `main` branch'ine direkt kod göndermeyin.

### İş Akışı
1. **İş Seçimi:** Projects panosundan `Todo` sütunundaki bir kartı seçin ve `In Progress`'e taşıyın
2. **Branch Açma:** `main`'den yeni branch açın
   - Özellik: `feature/login-sayfasi`
   - Hata: `fix/navbar-rengi`
   - Doküman: `docs/readme-duzenleme`
3. **Kodlama:** Commit mesajlarınız açıklayıcı olsun
   - `feat: Login tasarımı eklendi`
   - `fix: Buton hizalaması düzeltildi`
4. **Pull Request:** Kodunuzu push edin ve PR açın
   - Açıklayıcı başlık ve açıklama yazın
   - İlgili Issue'yu linkleyin
   - Reviewer ekleyin

### Code Review
PR açıldığında kod **In Review** sütununa düşer. Onaylandıktan sonra `main` ile birleşir.

---

## Hızlı Özet
| Durum | Kim? | Eylem |
| :--- | :--- | :--- |
| Fikir/Hata | Product Team | **Issue** aç |
| Kodlama | Developer | **Branch** → Kodla → **PR** aç |
| Kontrol | Tech Lead/QA | PR'ı incele → **Onayla** |
| Bitiş | Sistem | Merge → **Done** |

---
*İyi kodlamalar! ESN Türkiye Team*