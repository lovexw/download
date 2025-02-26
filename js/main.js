// 资源数据
let resources = {
    books: [],
    videos: [],
    software: [],
    documents: []
};

// 加载资源数据
async function loadResources() {
    try {
        const response = await fetch('/data/resources.json');
        resources = await response.json();
        renderResources();
    } catch (error) {
        console.error('加载资源数据失败:', error);
    }
}

// 渲染资源卡片
function renderResource(resource) {
    return `
        <div class="resource-card">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" class="download-btn" target="_blank">下载</a>
        </div>
    `;
}

// 渲染所有资源
function renderResources() {
    for (const category in resources) {
        const container = document.querySelector(`#${category} .resource-grid`);
        container.innerHTML = resources[category]
            .map(renderResource)
            .join('');
    }
}

// 添加资源的方法
function addResource(category, resource) {
    resources[category].push(resource);
    renderResources();
}

// 修改页面加载事件
document.addEventListener('DOMContentLoaded', loadResources);