# Licenças CC0 — Modelos 3D (Carros e Pessoas)

Todos os modelos de veículos e pedestres adicionados em `public/modelos/` são **CC0 1.0 Universal (Domínio Público)** — livres para uso comercial e editorial, sem exigência de atribuição, sem créditos pagos e sem ativos proprietários.

## Veículos (`carro_sedan.glb`, `carro_hatch.glb`, `carro_suv.glb`)

- **Autor:** Quaternius (Tomás Laulhé)
- **Pacote original:** *Realistic Car Pack* (Nov 2018 — pacote gratuito público, excluídos itens Patreon Exclusive)
- **Arquivos fonte:** `NormalCar1.fbx` (sedan), `NormalCar2.fbx` (hatch), `SUV.fbx` (SUV)
- **Site oficial:** https://quaternius.com/
- **Espelho público:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius
- **Licença:** CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- **Adaptações:** Normalização de escala métrica real (sedan 4,60×1,82×1,45 m; hatch 4,05×1,76×1,46 m; SUV 4,70×1,92×1,72 m), separação por submalha (`carroceria`, `vidro`, `detalhes`, `farol`, `lanterna`), cores de vértice em rodas/frisos e compressão `EXT_meshopt_compression` + `KHR_mesh_quantization` via `gltf-transform`.

## Pedestres Animados (`pessoa_h_casual.glb`, `pessoa_h_social.glb`, `pessoa_m_casual.glb`, `pessoa_m_vestido.glb`)

- **Autor:** Quaternius (Tomás Laulhé)
- **Pacotes originais:** *Animated Men Characters* (Feb 2019) e *Animated Women Characters* (Feb 2019)
- **Arquivos fonte:** `Smooth_Male_Casual.fbx`, `Smooth_Male_Suit.fbx`, `Smooth_Female_Casual.fbx`, `Smooth_Female_Dress.fbx`
- **Site oficial:** https://quaternius.com/
- **Espelho público:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius
- **Licença:** CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- **Adaptações:** Normalização de altura (1,78 m masculino / 1,68 m feminino, pés em `y = 0`), seleção exclusiva dos ciclos `Walk` e `Idle`, consolidação em material único com paleta UV (1 draw call por personagem, permitindo variação de roupas/pele/cabelo com geometria compartilhada) e compressão `meshopt` via `gltf-transform`.

## Referência auxiliar baixada no worktree (`quaternius-ual/`)

- **Pacote:** Quaternius *Universal Animation Library* (versão gratuita padrão, espelho `J-Ponzo/gltf-universal-animation-library`)
- **Licença:** CC0 1.0 Universal
- **Uso:** Referência local no worktree (não empacotada no build de produção).

## Texturas PBR e Geometrias Procedurais (Rodada 2 — Prédios Vizinhos, Lago e Ciclistas)

- **Texturas PBR reutilizadas:** mapas WebP CC0 já presentes em `public/texturas/pbr/` (`reboco`, `concreto`, `tijolo`, `telha`, `grama`, `asfalto`), `public/texturas/waternormals.webp` e mapas cerâmicos de pastilha do projeto em `public/texturas/unique/pastilha_*.webp`.
- **Ativos procedurais adicionados em código (domínio próprio / CC0):** atlas procedural de janelas/vitrines e pele de vidro (`CanvasTexture`), lona de toldo, areia/seixos ribeirinhos, geometrias de esquadrias com profundidade, rochas deformadas, tufos de junco ribeirinho e ciclistas instanciados. Nenhum ativo pago ou proprietário adicionado.
## Iluminação / Céu HDRI (`public/hdri/kloofendal_48d_partly_cloudy_puresky_1k.hdr`, `_512.hdr`)

- **Ativo original:** *Kloofendal 48d Partly Cloudy (Pure Sky)*
- **Autores:** Greg Zaal (captura original), Jarod Guest (edição pure sky)
- **Fonte oficial:** Poly Haven — https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
- **Download 1K:** https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloofendal_48d_partly_cloudy_puresky_1k.hdr
- **Licença:** CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- **Adaptações:** Versão desktop mantida em 1K (`1024×512`, 1,43 MB) e versão mobile reamostrada em radiância linear 2×2 para `512×256` (`kloofendal_48d_partly_cloudy_puresky_512.hdr`, 380 KB), com rotação Y (`+0,1846 rad`) alinhando o disco solar do HDRI (elevação 48,0°, azimute 34,3°) ao sol direcional rasante 3/4 da cena (elevação 46,5°, azimute 23,7°).

## Pedestres adicionais (`pessoa_h_mangalonga.glb`, `pessoa_h_camisa.glb`, `pessoa_m_alternativa.glb`, `pessoa_m_regata.glb`)

- **Autor:** Quaternius — *Animated Men Characters* / *Animated Women Characters* (Feb 2019), arquivos `Smooth_Male_LongSleeve.fbx`, `Smooth_Male_Shirt.fbx`, `Smooth_Female_Alternative.fbx`, `Smooth_Female_TankTop.fbx`
- **Espelho público:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius — **Licença:** CC0 1.0
- **Adaptações:** `scripts/converter_quaternius.py` (paleta UV 8×1 no mesmo padrão dos demais, clipes Walk/Idle, altura real, decimação 40 %, meshopt).

## Carros adicionais (`modelos/carros/*.glb`)

- Variantes geradas por `scripts/gerar_carros_variantes.py` a partir do gerador procedural próprio (`scripts/gerar_carros_blender.py`) — sem assets de terceiros.

## Pedestres estáticos extras (7 modelos)

- **Autor:** Quaternius — *Posed Background Characters* (Aug 2018) e variantes criança/idoso no mesmo padrão, CC0 1.0.
- **Espelho:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius
- **Adaptações:** paleta UV 8×1, pés em y=0, meshopt; usados só no desktop nos grupos parados.
