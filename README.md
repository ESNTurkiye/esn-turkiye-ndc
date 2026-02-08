# ESN Türkiye NDC Platform

Bu proje, **ESN Türkiye** Ulusal Geliştirme Komitesi (NDC) tarafından yürütülen **Barriers of Mobility** araştırma projesinin web platformudur. Hareket engelleri, vize süreçleri ve uluslararası mobilite deneyimleri hakkında bilgi sunar.
---

## Gereksinimler

Projeyi çalıştırabilmeniz için bilgisayarınızda şunlar yüklü olmalıdır:

| Araç | Ne İşe Yarar? | Nereden İndirilir? |
|------|---------------|---------------------|
| **Node.js** | JavaScript kodunu çalıştıran ortam. `npm` komutları bununla gelir. | [nodejs.org](https://nodejs.org) |
| **npm** | Node.js ile birlikte gelir. Paket kurulumu ve proje komutlarını çalıştırır. | Node.js kurulumu ile otomatik gelir |

**Kontrol:** Terminalde `node -v` ve `npm -v` yazarak kurulu sürümleri görebilirsiniz.

---

## Kurulum ve Çalıştırma

### Projeyi İndirin

Git kullanıyorsanız:
```bash
git clone https://github.com/ESNTurkiye/esn-turkiye-ndc.git
cd esn-turkiye-ndc
```

### Bağımlılıkları Yükleyin

```bash
npm install
```

### Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Çıktıda görünen adrese (genellikle `http://localhost:5173`) tarayıcıdan giderek siteyi inceleyebilirsiniz. Kodda yaptığınız değişiklikler anında sayfada yansır.

---

## Komutlar (npm scripts)

Proje kök dizininde iken `npm run <komut>` ile kullanılabilir:

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır. Değişiklikler anında yansır. |
| `npm run build` | Projeyi üretim için derler. `dist` klasörüne optimize edilmiş dosyalar çıkar. |
| `npm run preview` | Derlenmiş siteyi yerel olarak önizlemenizi sağlar (`build` sonrası kullanılır). |
| `npm run fetch-posts` | Blog yazılarını dış kaynaktan (GitHub vb.) çeker. |
| `npm run lint` | Kod kalitesi ve stil kurallarını kontrol eder. |

---

## Teknoloji Yığını (Tech Stack)

Projede kullanılan ana araçlar:

| Teknoloji |
|-----------|
| **React 19** |
| **TypeScript** |
| **Vite** |
| **Tailwind CSS 4** |
| **React Router** |

---

## Proje Yapısı

Temel klasör ve dosyaların işlevi:

```
esn-turkiye-ndc/
├── public/              # Doğrudan sunulan statik dosyalar (favicon, PDF’ler, vb.)
├── scripts/             # Yardımcı script’ler (ör. fetch-posts)
├── src/
│   ├── components/      # Tekrar kullanılabilir UI bileşenleri
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── sections/    # Sayfa bölümleri: Hero, Team, ProjectInfo, Testimonies
│   │   └── shared/      # Ortak bileşenler (modal, carousel)
│   ├── config/          # Yapılandırma (analytics, SEO, navigasyon)
│   ├── data/            # Statik veriler (takım, tanıklıklar, blog listesi)
│   ├── hooks/           # Özel React hook’ları
│   ├── pages/           # Sayfa bileşenleri (Home, Blog listesi, Blog detay)
│   ├── utils/           # Yardımcı fonksiyonlar
│   ├── App.tsx          # Ana uygulama ve rotalar
│   ├── main.tsx         # Giriş noktası
│   └── index.css        # Global stiller
├── index.html           # HTML giriş dosyası
├── package.json         # Bağımlılıklar ve script’ler
├── vite.config.ts       # Vite yapılandırması
└── tsconfig.json        # TypeScript yapılandırması
```

---

## Sayfalar ve Rotalar

| URL | İçerik |
|-----|--------|
| `/` | Ana sayfa: Hero, Proje Özeti, Takım, Tanıklıklar |
| `/blog` | Blog yazıları listesi |
| `/blog/:slug` | Tek bir blog yazısının detay sayfası |

---

## Katkıda Bulunma

Bu platform **ESN Türkiye Ulusal Geliştirme Komitesi (NDC)** tarafından yönetilmektedir.

- **Issue açmak, hata bildirmek:** `CONTRIBUTING.md` dosyasına bakın.
- **Kod göndermek:** `main` branch’ine doğrudan push yapmayın. Önce `feature/` veya `fix/` ile branch açıp Pull Request açın.

---

## Lisans

Proje lisansı `LICENSE` dosyasında belirtilmiştir.

---

**ESN Türkiye** — Students Helping Students