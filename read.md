
---

# README - 金涛💕紫彦 项目

这是一个记录爱情的个人网站项目，包含主页 (`index.html`) 和更多页面 (`more.html`)，使用 HTML、CSS 和 JavaScript 实现。以下是项目的结构和功能概述。

## 项目结构
```
project/
├── index.html              # 主页，展示爱情记录和多媒体内容
├── more.html               # 更多页面，展示背景信息和歌曲列表
├── css/
│   ├── reset.css          # 重置浏览器默认样式
│   ├── style.css          # 主页样式
│   └── styles.css         # 更多页面样式
├── js/
│   ├── control.js         # 单一音频播放控制
│   ├── every.js           # 周数据导航
│   ├── load.js            # 音频进度条
│   ├── music.js           # 音频可视化
│   ├── play.js            # 可播放元素控制
│   ├── time.js            # 时间记录
│   ├── weather.js         # 天气数据获取
│   └── word.js            # 名言加载与显示
```

## 文件详情

### `index.html` - 主页
主页展示爱情相关的多媒体内容，包括音频播放、可视化、进度条、天气、时间记录、周数据和名言。

#### 结构树
```
index.html
├── head
│   ├── meta (charset, viewport)
│   ├── title: "金涛💕紫彦"
│   ├── link (reset.css, style.css, favicon)
├── body
│   ├── div.welcome
│   │   ├── div.welcome-word: "金涛💕紫彦"
│   ├── div#quoteContainer
│   │   ├── div#quote
│   │   ├── div#author
│   ├── div#content-container.clock
│   ├── canvas.canvas
│   ├── audio#music-play (loop, preload="auto")
│   ├── div.loading
│   ├── div.loadtime
│   ├── div.rongqi
│   │   ├── div.weather-container
│   │   │   ├── img.weather-icon
│   │   │   ├── div.weather-word
│   │   │   │   ├── div#weather-text
│   │   │   │   ├── div#weather-temp
│   │   ├── div.playable (data-audio="https://cdn.jintao.us.kg/source/zzzs.m4a")
│   │   │   ├── img.img-user
│   │   ├── audio#audio
│   │   ├── div.card-container-01.playable (data-audio="https://cdn.jintao.us.kg/source/love story.m4a")
│   │   │   ├── div.card1
│   │   │   │   ├── div.face.front
│   │   │   │   │   ├── img
│   │   │   │   ├── div.face.back: "FROM TIME <br>2024-12-12"
│   │   ├── div.card-container-02.playable (data-audio="https://cdn.jintao.us.kg/source/weiyi.m4a")
│   │   │   ├── div.card1
│   │   │   │   ├── div.face.front
│   │   │   │   │   ├── img
│   │   │   │   ├── div.face.back
│   │   │   │   │   ├── div#record-time
│   │   ├── div.control
│   │   │   ├── button#previous-week: "上一周"
│   │   │   ├── button#next-week: "下一周"
│   │   │   ├── button#more (onclick="window.open('more.html', '_blank')"): "更多"
│   ├── script (src="js/weather.js")
│   ├── script (src="js/music.js")
│   ├── script (src="js/word.js")
│   ├── script (src="js/control.js")
│   ├── script (src="js/time.js")
│   ├── script (src="js/every.js")
│   ├── script (src="js/play.js")
│   ├── script (src="js/load.js")
```

#### 功能说明
- **欢迎动画**：`.welcome` 通过 `style.css` 实现文字展开动画。
- **名言展示**：`#quoteContainer` 由 `word.js` 填充随机名言。
- **周数据**：`#content-container` 由 `every.js` 加载并导航 JSON 数据。
- **音频播放**：
  - `#music-play`：背景音乐，由 `music.js` 设置每日音频并可视化。
  - `.playable` 元素：由 `play.js` 控制独立音频播放。
  - `#audio`：全局音频，由 `control.js` 确保单一播放。
- **进度条**：`.loading` 和 `.loadtime` 由 `load.js` 更新。
- **天气**：`.weather-container` 由 `weather.js` 获取并显示。
- **时间记录**：`#record-time` 由 `time.js` 计算并更新。
- **导航**：`.control` 按钮由 `every.js` 控制周切换，`more` 按钮跳转到 `more.html`。

---

### `more.html` - 更多页面
更多页面展示背景信息、歌曲列表和星空动画，提供中英文切换功能。

#### 结构树
```
more.html
├── head
│   ├── meta (charset, viewport)
│   ├── title: "更多"
│   ├── link (reset.css, styles.css)
├── body
│   ├── canvas#starCanvas
│   ├── button#toggleBtn: "ZH"
│   ├── button#back (onclick="window.location.href='index.html'"): "返回"
│   ├── div.thanks-zh.zh
│   │   ├── br
│   │   ├── text (中文感谢词)
│   │   ├── br
│   ├── div.thanks-en.en
│   │   ├── br
│   │   ├── text (英文感谢词)
│   │   ├── br
│   ├── div.item: "日期背景音乐对照"
│   ├── table
│   │   ├── thead
│   │   │   ├── tr
│   │   │   │   ├── th: "日期"
│   │   │   │   ├── th: "歌曲"
│   │   │   │   ├── th: "歌手"
│   │   ├── tbody
│   │   │   ├── tr (31 rows with date, song, artist)
│   ├── div.word-zh.zh
│   │   ├── br
│   │   ├── text (中文IT致谢)
│   │   ├── br
│   ├── div.word-en.en
│   │   ├── br
│   │   ├── text (英文IT致谢)
│   │   ├── br
│   ├── div.about: "© 2024--2025 GUANGZHOUYAHUA GROUP"
│   ├── script (语言切换)
│   ├── script (星空动画)
```

#### 功能说明
- **星空背景**：`#starCanvas` 通过 inline JS 绘制动态星星。
- **语言切换**：`#toggleBtn` 通过 inline JS 切换 `.zh` 和 `.en` 内容的显示。
- **导航**：`#back` 按钮返回 `index.html`。
- **内容**：
  - `.thanks-zh` 和 `.thanks-en`：中英文感谢词。
  - `.item` 和 `table`：日期与背景音乐对照表。
  - `.word-zh` 和 `.word-en`：中英文 IT 致谢。
  - `.about`：版权信息。

---

## CSS 文件
- **`reset.css`**：重置浏览器默认样式。
- **`style.css`**：为主页提供样式，包括欢迎动画、卡片翻转、进度条等。
- **`styles.css`**：为更多页面提供样式，包括星空背景和表格布局。

## JS 文件
- **`control.js`**：确保只有一个音频播放。
- **`every.js`**：加载 JSON 数据并实现周导航。
- **`load.js`**：更新音频进度条和时间显示。
- **`music.js`**：设置每日背景音乐并绘制可视化。
- **`play.js`**：控制 `.playable` 元素的音频播放。
- **`time.js`**：计算并显示相爱时间。
- **`weather.js`**：获取并显示天气信息。
- **`word.js`**：加载并显示随机名言。

---

## 使用说明
1. 将所有文件放入同一目录结构。
2. 在浏览器中打开 `index.html` 查看主页。
3. 点击“更多”按钮跳转到 `more.html`。
4. 确保网络连接正常以加载外部资源（音频、天气 API 等）。

## 注意事项
- 项目依赖外部 CDN 资源（如字体、音频、图片）。
- 部分功能（如天气）需要 API key 有效。
- 当前结构嵌套较复杂，建议未来优化为模块化设计。

---
