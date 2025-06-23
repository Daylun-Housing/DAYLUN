import { contentData } from "./content";

const PageBody : React.FC = () => {
    return (
        <div className="p-6 space-y-6">
            {contentData.map((item, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="mb-2">{item.description}</p>
                    {item.TechImage && <img src={item.TechImage} alt="item.title" className="w-40" />}
                </div>

                )

            
            )}


        </div>

    )
}

export default PageBody;