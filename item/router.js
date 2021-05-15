import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
var router = new VueRouter({
	mode:'history',
	routes:[
		{path:'/',redirect:'/login'},
		{path:'/login',component:Login,meta:{title:'登录'}},
		{path:'/register',component:Register,meta:{title:'注册'}}
	],
	
});
//更改页面标题的全局钩子函数
	router.beforeEach((to,from,next)=>{
		if(to.meta.title){
			document.title = to.meta.title
		}
		next()
	});
//下面可有可无
export default router