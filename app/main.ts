import "./lib/reflect";
import { App, Logic } from "./app";
// import "reflect-metadata";

interface myLo {
	aa: string;
}

export class Main {
	// @logType //必须要有一个装饰器，才能启动元数据
	// getTest: number = 2;

	// @logType
	// ttt!: myLo;

	@logType
	mmm: Logic = new Logic();
}

function logType(target: any, key: string) {
	// console.log(logType);
	// var t = Reflect.getMetadata("design:type", target, key);
	// console.log(`${key} type: ${t.name}`);
}

const main = {
	getTest: 2,
};

// console.log(Main.prototype);
// console.log(Reflect["getMetadata"]("design:type", Main.prototype, "getTest"));
console.log(Reflect);
// console.log(Reflect.getMetadata("design:type", Main.prototype, "getTest"));
