# reflect

元数据 反射 泛型

 记录一下原理
可以通过绑定`reflect`上面的方法，获取到`ts`属性所依赖的泛型的名称或是类，从而实现依赖注入等等

`tsconfig.json`需要开启

"experimentalDecorators": true 
"emitDecoratorMetadata": true 
