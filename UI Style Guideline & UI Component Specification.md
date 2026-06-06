# **UI Style Guideline & UI Component Specification**

本文件定義「行銷自動化診所」網站的極簡極客風格（Minimalist Tech / Dark Mode）視覺規範與組件標準。AI Agent 在進行任何程式碼開發、修訂或區塊新增時，必須嚴格遵守本規範，不得自行變更色彩代碼、圓角、間距或字體階層。

## **1\. 全局設計語彙 (Design Language)**

* **核心調性：** 暗黑高對比、硬朗線條、精準低調、極客科技感。  
* **視覺護欄：**  
  * 嚴禁使用任何圓潤的超大圓角（如 rounded-xl, rounded-3xl 或 rounded-full，除非是純圓形圖標）。  
  * 嚴禁使用大面積的漸層色。  
  * 嚴禁使用複雜的立體陰影（Drop Shadow），一律改用細邊框（Border）取代陰影來區分層級。

## **2\. 色彩系統定義 (Tailwind CSS Config)**

必須將以下變數寫入 Tailwind Config 或 CSS Root 中，後續開發僅能使用這些命名：

* **bg-geek-bg** : \#05070A (接近純黑的極致暗黑底色，全局背景)  
* **bg-geek-surface** : \#0F131A (卡片、導航列、區塊的表面背景色)  
* **text-geek-primary** : \#00FF66 (焦點色：螢光科技綠，用於核心強烈提示、主要按鈕字體/邊框)  
* **text-geek-main** : \#F3F4F6 (主要文字：極亮灰白，用於標題、強調內文)  
* **text-geek-muted** : \#9CA3AF (次要文字：科技低調灰，用於說明、內文、標籤)  
* **border-geek-dark** : \#1F2937 (預設細邊框色：Slate-800)

## **3\. 字體階層與排版 (Typography)**

全站強制啟用等寬字體（Monospace），展現極客工程美學。

* **字體家族 (Font Family)：** font-mono (優先使用 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace)  
* **主標題 (H1)：** text-4xl md:text-5xl font-mono font-bold tracking-tight text-geek-main  
* **區塊/卡片標題 (H2/H3)：** text-xl md:text-2xl font-mono font-semibold tracking-wide text-geek-main  
* **標準內文 (Body)：** text-base font-mono font-normal leading-relaxed text-geek-muted  
* **微型標籤 (Label/Tag)：** text-xs font-mono tracking-widest uppercase text-geek-primary

## **4\. 標準 UI 組件規範 (Component UI Spec)**

AI Agent 於全站建置或修改組件時，必須百分之百複製並套用以下 HTML/Tailwind 結構：

### **4.1 核心卡片 (Base Card)**

用於痛點展示、服務項目方案。外觀為深色表面、極細暗色邊框、硬朗小圓角。

HTML  
\<div class="bg-\[\#0F131A\] border border-\[\#1F2937\] rounded-md p-6 hover:border-\[\#00FF66\]/40 transition-colors duration-300"\>  
  \<span class="text-xs font-mono tracking-widest text-\[\#00FF66\] uppercase mb-2 block"\>// CATEGORY\</span\>  
  \<h3 class="text-xl font-mono font-semibold text-\[\#F3F4F6\] mb-3"\>卡片標題\</h3\>  
  \<p class="text-base font-mono text-\[\#9CA3AF\]"\>這裡是標準內文說明...\</p\>  
\</div\>

### **4.2 主要行動呼籲按鈕 (Primary CTA Button)**

用於最核心的預約、提交。實心螢光綠底、黑字、硬朗圓角，Hover 時產生低調反轉。

HTML  
\<button class="bg-\[\#00FF66\] text-\[\#05070A\] font-mono font-bold text-sm px-6 py-3 rounded-md hover:bg-transparent hover:text-\[\#00FF66\] border border-\[\#00FF66\] transition-all duration-300"\>  
  \[ 立即預約健診 \]  
\</button\>

### **4.3 次要按鈕 (Secondary Button)**

用於了解更多、切換方案。透明底、螢光綠邊框與字體。

HTML  
\<button class="bg-transparent text-\[\#00FF66\] border border-\[\#00FF66\] font-mono font-medium text-sm px-6 py-3 rounded-md hover:bg-\[\#00FF66\]/10 transition-all duration-300"\>  
  了解解決方案 \_  
\</button\>

### **4.4 輸入表單欄位 (Input Field Spec)**

用於底部的篩選問卷區。全黑底、深色邊框、Focus 時亮起螢光綠。

HTML  
\<div class="flex flex-col gap-2"\>  
  \<label class="text-xs font-mono text-\[\#F3F4F6\] uppercase tracking-wider"\>\> 輸入欄位名稱\</label\>  
  \<input type="text" class="bg-\[\#05070A\] border border-\[\#1F2937\] rounded-md px-4 py-3 text-\[\#F3F4F6\] font-mono text-sm focus:outline-none focus:border-\[\#00FF66\] transition-colors duration-300" placeholder="請輸入..." /\>  
\</div\>

## **5\. 佈局間距標準 (Layout & Spacing)**

* **全站最大寬度：** 限制在 max-w-6xl (約 1152px)，保持視覺緊湊。  
* **區塊上下間距 (Section Padding)：** 一律使用 py-20 md:py-28，留出足夠的科技呼吸感。  
* **網格間距 (Grid Gap)：** 卡片群組一律使用 gap-6 或 gap-8。

