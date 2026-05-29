import Collection from "../../Constants/Collection";
import Collections from "./Collections";
const CollectionData = () => {
  return (
    <section className="px-6 py-10">
      <div className="flex gap-6">
        {Collection.map((item) => (
          <Collections key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionData;
