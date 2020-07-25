import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/message";
import ValueWrapper from "../validatable/readonly-wrapper";
import Value from "../value";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link Validatable}
 */
export default class ReadonlyWrapper<Subject extends Validatable & Message & Value = Validatable & Message & Value> extends ValueWrapper<Subject> implements Readonly<Message<InferMessage<Subject>>> {
    get message(): InferMessage<Subject>;
}