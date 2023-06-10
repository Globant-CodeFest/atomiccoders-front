import { Result } from "../../components/Result/Result";
import { Prompt } from "../../components/Prompt/Prompt";
import { Chatting } from "../../components/Chatting/Chatting";
import './styles.css'
export function Home() {
  return (
    <div
     className="container"
    >
      <Chatting/>
      <Result/>
      <Prompt/>
    </div>
  );
}