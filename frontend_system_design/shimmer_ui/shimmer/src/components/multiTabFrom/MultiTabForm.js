import React, { useState } from "react";
import "./styles.css";

const MultiTabForm = () => {
  const tabs = [
    {
      id: 0,
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (!data.age || data.age < 18) {
          err.age = "Age is Requried must be numeric";
        }
        if (!data.email || !data.email.includes("@")) {
          err.email = "Enter valid email";
        }
        setErrors(err);
        return err.age || err.email ? false : true;
      },
    },
    {
      id: 1,
      name: "Interest",
      component: Interest,
      validate: () => {
        return true;
      },
    },
    {
      id: 2,
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    age: 28,
    email: "syam@sh.com",
  });
  const [errors, setErrors] = useState({});

  const ActiveComponent = tabs[active].component;
  const handleNextChange = () => {
    if (tabs[active].validate()) {
      setActive(active + 1);
    }
  };
  const handlePrevChange = () => {
    setActive(active - 1);
  };
  const handleSubmit = () => {
    // make api call with all values
    alert(JSON.stringify(data));
  };

  return (
    <div className="tabs">
      <h3 className="header">Multi Tab Form</h3>
      <div className="tab-container">
        {tabs.map((t) => (
          <div
            className={`${
              t.id === active ? "tab-header active" : "tab-header"
            }`}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="btn-container">
        {active > 0 && (
          <button className="btn" onClick={handlePrevChange}>
            Prev
          </button>
        )}
        {active < tabs.length - 1 && (
          <button className="btn" onClick={handleNextChange}>
            Next
          </button>
        )}
        {active === tabs.length - 1 && (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

const Profile = ({ data, setData, errors }) => {
  const handleChange = (e, item) => {
    setData((prevData) => ({ ...prevData, [item]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={data.age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      <span className="error">{errors.age ? errors.age : ""}</span>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      <span className="error">{errors.email ? errors.email : ""}</span>
    </div>
  );
};

const Interest = () => {
  return <div>Interest</div>;
};
const Settings = () => {
  return <div>Settings</div>;
};

export default MultiTabForm;
