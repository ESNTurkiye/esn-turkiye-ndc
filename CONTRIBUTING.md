# Contributing — ESN Türkiye NDC

## Branch Strategy

`main` **her zaman deploy edilebilir durumda olmalı.** Doğrudan `main` üzerinde commit/push yok.

```
main
  └── feature/xyz
  └── fix/xyz
  └── docs/xyz
```

- **feature/** — Yeni özellik
- **fix/** — Bug fix
- **docs/** — Dokümantasyon

`main`’i güncel tutun, branch’lerinizi sık rebase edin.

---

## Workflow

1. **Issue al** → Projects panosunda kartı `Todo` → `In Progress` taşı
2. **Branch aç** → `git checkout main && git pull && git checkout -b feature/xyz`
3. **Commit** → Conventional Commits kullan
4. **Push** → `git push -u origin feature/xyz`
5. **PR aç** → İlgili Issue’yu linkle, reviewer ata

PR merge sonrası branch’i sil.

---

## Commit Convention

```
<type>: <açıklama>
```

| Type   | Kullanım                         |
|--------|-----------------------------------|
| feat   | Yeni özellik                     |
| fix    | Bug fix                          |
| docs   | README, CONTRIBUTING vb.         |
| style  | Format, whitespace (logic yok)   |
| refactor | Kod yapısı değişikliği        |
| perf   | Performans iyileştirmesi         |
| chore  | Build, tooling, config           |

Örnek: `feat: add blog post pagination`, `fix: mobile header overflow`

---

## Proje Mimarisi

### Path Alias

```ts
import { X } from "@/components/...";
import { config } from "@/config/...";
```

`@/` → `src/`

### Klasör Yapısı

| Dizin             | Amaç                                   |
|-------------------|----------------------------------------|
| `src/components/sections/` | Sayfa bölümleri (Hero, Team, ProjectInfo vb.) |
| `src/components/layout/`   | Header, Footer, Layout                 |
| `src/components/shared/`   | Ortak UI (modal, carousel)             |
| `src/config/`     | Analytics, SEO, nav, URL’ler           |
| `src/data/`       | Statik veri (team, testimonies, posts) |
| `src/hooks/`      | Custom React hooks                     |
| `src/pages/`      | Route-level bileşenler                 |
| `src/utils/`      | Pure helper fonksiyonlar               |

### Bileşen Organizasyonu

- **Section bileşenleri** (`sections/X/`): Kendi klasöründe; `index.tsx` ana export, alt bileşenler ayrı dosyalar.
- **Data/constants**: Mümkün olduğunca bileşenden ayrı (`*Data.ts`, `*Config.ts`).
- **Logic**: Custom hook’lara taşı (`useXxx.ts`).

### TypeScript

- `strict: true`, `noUnusedLocals`, `noUnusedParameters` açık.
- `any` kullanma; gerekirse `unknown`.
- Shared tip’ler `src/types/` altında.

---

## Pre-merge Checklist

PR merge öncesi:

```bash
npm run lint
npm run build
```

Lint ve build hatasız olmalı.

---

## Projects Board (Kanban)

| Kolon      | Anlamı                                |
|------------|----------------------------------------|
| Backlog    | Henüz planlanmamış                     |
| Todo       | Yapılacak, sıra bekliyor               |
| In Progress| Aktif geliştirme                       |
| In Review  | PR açıldı, review bekliyor             |
| Done       | Merge edildi                           |

Kartı kendi işine taşı; iş bittiğinde `Done`’a al.

---

## Code Review Beklentisi

- Build geçmeli, lint temiz olmalı.
- PR açıklaması net; ne değişti, neden değişti belirtilmeli.
- İlgili Issue linklenmeli.
- Küçük PR tercih edilir; tek concern, okunabilir diff.

---

**ESN Türkiye** — Students Helping Students
