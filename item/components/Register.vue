<template>
	<div class="Register">
		<div class="content">
			<form class="mui-input-group login-form">
				<div class="mui-input-row">
					<label>账号</label>
					<input type="text" class="mui-input-clear mui-input"  placeholder="请输入账号"/>
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input type="password" class="mui-input-clear mui-input"  placeholder="请输入密码"/>
				</div>
				<div class="mui-input-row">
					<label>确认密码</label>
					<input type="password" class="mui-input-clear mui-input"  placeholder="请确认密码"/>
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input type="email" class="mui-input-clear mui-input"  placeholder="请输入邮箱"/>
				</div>
			</form>
			<div class="mui-content-padded">
				<button type="button" class="mui-btn mui-btn-block mui-btn-primary" >注册</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	.mui-content-padded button{
		background-color: #ff007f;
		border: none;
	}
	input[type='submit']:enabled:active, input[type='submit'].mui-active:enabled, .mui-btn-primary:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-blue.mui-active:enabled{
		background-color: pink;
	}
	.Register{
		width: 500px;
		height: 500px;
	}
</style>
