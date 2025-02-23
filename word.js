// 这个数组将被用来存储从quotes.json加载的数据
let quotes = [];

// 从quotes.json文件中异步加载数据
/**
 * 加载名言列表并显示随机名言。
 * 该函数通过fetch API从指定路径获取JSON格式的名言数据，
 * 成功获取后将其赋值给全局变量quotes，并调用displayRandomQuote函数显示一条随机名言。
 * 如果网络请求失败，则在控制台输出错误信息。
 */
function loadQuotes() {
    fetch('../sources/word.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            quotes = data; // 将加载的数据赋值给quotes变量
            displayRandomQuote(); // 显示第一条随机哲理句子
        })
        .catch(error => {
            // 如果发生错误，可以在控制台输出错误信息，便于调试
            console.error('Error loading quotes:', error);
        });
}

// 从quotes数组中随机选择一个索引
function getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
}

// 获取随机哲理句子
function getRandomQuote() {
    const index = getRandomIndex();
    return quotes[index];
}

// 显示随机哲理句子的函数
function displayRandomQuote() {
    // 检查quotes是否为空，避免尝试显示空数据
    if (quotes.length === 0) {
        return;
    }

    // 获取随机名言
    const randomQuote = getRandomQuote();

    // 直接更新DOM，减少DOM操作次数
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    if (quoteElement) {
        quoteElement.textContent = randomQuote.poem;
    }
    if (authorElement) {
        authorElement.textContent = `— ${randomQuote.author}`;
    }
}

// 当文档加载完毕时，加载quotes.json文件
document.addEventListener('DOMContentLoaded', loadQuotes);
