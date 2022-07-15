import "./tab.css"
function Tab() {
  const tabs = [
    { title: "Hectare", id: 1 },
    { title: "Reports", id: 2 },
    { title: "Gallery", id: 3 },
    { title: "Press & Media", id: 4 },
    { title: "FAQs", id: 5 },
  ];
  return (
    <>
      <div className="tab">
        {tabs.map((tab) => (
          <ul className="tab-list" key={tab.id}>
            <li>{tab.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Tab;
