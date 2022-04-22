import 'mocha';
import {expect} from "chai";
import {AddReduce} from "../../src/modificacion/addreduce";
import {RestReduce} from "../../src/modificacion/restreduce";

let add = new AddReduce(1, 2, 3, 4);
let rest = new RestReduce(1, 2, 3, 4);

describe('tests', () => {
  it('test addReduce', () => {
    expect(add.run()).to.eql(10);
  });
  it('test restReduce', () => {
    expect(rest.run()).to.eql(-10);
  });
});
