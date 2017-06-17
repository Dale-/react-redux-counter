# React Redux Counter

```
src
    actions            	 	// Action: 对行为的抽象（如用户行为）
    service             	// Service: 负责与后台交互,提供函数接口供用户调用
    components          	// UI组件: 负责渲染视图,只负责 UI 的渲染,不带有任何业务逻辑
    containers          	// 容器组件: 负责管理数据和业务逻辑、状态,一般和 router 对应
    reducers            	// Reducer: 实现(state, action) => newState的纯函数,用来修改store的状态
    styles              	// 样式文件
    mock                  // Mock数据
    constants.js        	// 常量文件
    app.js
```
