import { Send } from "iconsax-react";
import { History, Plus } from "lucide-react";

const AbscissaAI = () => {
  const sampleChats = [
    {
      text: "What is the value of x+2?",
      type: "request",
      date: "12/12/2024",
    },
    {
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus magnam rem quam quisquam omnis dignissimos perspiciatis suscipit necessitatibus illo facilis id facere alias a accusamus odit provident dolorem maiores dolorum accusantium, consequuntur voluptate. Placeat, at? Earum itaque fugiat facilis blanditiis nesciunt dicta, minima repellat vero ipsum ipsa, corporis laborum tempora libero est, doloremque voluptatum quisquam quia atque adipisci voluptas repellendus at error maxime! Dolor accusantium facilis quam, nam, libero repellat ea, omnis error repellendus voluptate voluptas esse qui iste mollitia cumque id sit suscipit eaque quisquam quia dignissimos velit blanditiis? Et, vitae. Dolore iste totam quam quae inventore perferendis minima sint quia dolor numquam iusto nobis repellendus vitae eos qui aliquam accusantium ab eligendi ullam laboriosam, quos fuga neque ipsum deleniti. Unde illum quo neque hic soluta molestias qui aspernatur laudantium quis nulla commodi fuga ad earum aliquid rerum voluptate aut, officia similique voluptatibus repudiandae vero quod vel? Fugit sed delectus maxime asperiores quos quas modi odio quibusdam perspiciatis! Similique distinctio incidunt quo dolorum numquam quis inventore expedita perferendis error fuga vitae autem obcaecati maiores doloremque dicta voluptates iusto corporis neque saepe quam, assumenda omnis unde enim. Aliquid omnis obcaecati molestiae, cupiditate id velit tempore impedit harum repudiandae vitae blanditiis nostrum autem ad illo nisi minima! Dolorum quasi cupiditate minus sit nisi nulla, atque sint adipisci similique quis, ducimus voluptates tempore tempora provident consequatur non. Voluptas eveniet ipsum tempore ratione assumenda dolores laboriosam illo aspernatur delectus est hic sint ea neque aliquid facilis velit officiis, quisquam dignissimos similique quis enim earum optio! Beatae harum atque quidem, voluptatem doloribus neque vel ad nulla dolore accusamus, aliquid voluptates adipisci maiores totam soluta magnam ex eveniet quod, numquam officiis. Eum ducimus atque, numquam nobis sed labore sunt nesciunt odio expedita sit, beatae doloribus eligendi mollitia facere! Autem explicabo fuga iste quo quis sequi eligendi, dolor odit, suscipit quia, amet et numquam. Totam, in neque, iste officia laborum incidunt deleniti asperiores alias possimus amet ex voluptatem reiciendis esse saepe quaerat earum? Fugit id quas adipisci impedit dolore aliquid magni, quos voluptate repellat doloremque tenetur nobis eos, consequuntur earum odio distinctio nemo iste. Velit aut suscipit culpa voluptas nemo sequi perferendis nostrum ipsa dignissimos nisi. Optio exercitationem aut praesentium debitis voluptatibus voluptas laboriosam nesciunt adipisci inventore hic voluptatum, vel consectetur atque voluptates officia magni possimus porro error aliquid quia alias maiores aspernatur ipsum! Dolorem mollitia nesciunt voluptates minima quae quis tempora cupiditate earum neque. Ipsum?",
      type: "response",
      date: "12/12/2024",
    },
    
    {
      text: "Ok",
      type: "request",
      date: "12/12/2024",
    },
  ];
  return (
    <div className="mx-auto 2xl:w-2/3 w-full ">
      <div className="my-10 grid">
        <div className=" h-[68vh] overflow-scroll p-2">
          <div className="grid gap-5">
            {sampleChats.map((chat, index) => (
              <div
                key={index}
                className={`p-3  ${
                  chat.type == "request"
                    ? "bg-pink rounded-xl ml-auto w-2/6 rounded-br-none text-right"
                    : "border-t border-t-slate-800 mr-auto w-full rounded-bl-none text-left"
                } `}
              >
                {chat.text}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto flex gap-2 items-center">
          <button className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-1">
              <Plus className="h-6 w-6" />
            </div>
          </button>
          
          <div className="bg-slate-800 rounded-full w-full px-3 py-2">
            <div className="flex gap-3 items-center">
              <div className="p-2 rounded-full hover:bg-slate-700 cursor-pointer">
                <History className="h-6 w-6" />
              </div>
              <input
                type="text"
                className="w-full"
                placeholder="Type in your word problem"
              />
              <div className="p-2 rounded-full bg-pink hover-dark-bg-pink cursor-pointer">
                <Send className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbscissaAI;
