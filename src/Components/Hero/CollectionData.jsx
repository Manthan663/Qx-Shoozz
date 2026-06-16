import Collection from "../../Constants/Collection";
import Collections from "./Collections";
const CollectionData = () => {
  return (
    <section className="px-6 py-10">
      <div className="lg:flex md:grid grod-cols-1 gap-6 px-4">
        {Collection.map((item) => (
          <Collections key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionData;
