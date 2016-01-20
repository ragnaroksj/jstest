# jstest
Unit test learning book

Mocha + Chai

Notes:
describe: 测试套件，第一个参数为测试套件名称，第二个实际执行函数
it: 测试用例，第一个参数是测试用例的名称，第二个是实际执行的函数
测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块

断言：
expect: 头部是expect方法,尾部是equal,a/an,ok,match等。两者之间使用to, to.be

异步操作：
1. done(): it块执行的时候，传入一个done参数，当测试结束的时候，必须显式调用这个函数，告诉Mocha测试结束了
2. promise 方法: 使用then


常用执行
mocha执行test子目录里面第一层鹅测试用例。
可以用－－recursive
通配符执行多个文件
mocha test/*.js
mocha test/{test1,test2}.js
mocha --reporter spec 默认为spec格式报告
--growl
--watch: 参数用来监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha
--bail,-b: 参数指定只要有一个测试用例没有通过，就停止执行后面的测试用例
-t,--timeout: Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛。需要用-t或--timeout参数，改变默认的超时设置
-s,--slow: 高亮显示超过XXX毫秒的测试用例

测试用例钩子：
describe('hooks', function() {

  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

  // test cases
});

测试用例管理：
Only: 大型项目有很多测试用例。有时，我们希望只运行其中的几个，这时可以用only方法。describe块和it块都允许调用only方法，表示只运行某个测试套件或测试用例。
skip: 表示跳过指定的测试套件或测试用例


Chai:

assert(expression, message):
@param{ Mixed }expressionto test for truthiness
@param{ String }messageto display on error

More is in http://chaijs.com/api/assert/

BDD: http://chaijs.com/api/bdd/
Expect
should


















