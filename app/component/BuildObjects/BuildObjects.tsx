"use client";
import { useEffect, useState } from "react";

import "./BuildObjects.scss";
import Container from "../UI/container";
import BuildObjectsSlider from "../BuildObjectsSlider/BuildObjectsSlider";

// get data
import { BuiltObjectsData } from "./types";
import { fetchBuiltObjects } from "./fetchData";

export default function BuildObjects() {
  // all built objects
  const [allBuildedObjects, setAllBuiltObjects] = useState<
    BuiltObjectsData[] | null
  >(null);

  // showed objects
  const [showedObjects, setShowedObjects] = useState<
    BuiltObjectsData[] | null
  >();

  // types of objects
  const [typeObjects, setTypeObjects] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("Усі");

  // fetch data
  useEffect(() => {
    setTimeout(() => {
      fetchBuiltObjects().then((data) => {
        setAllBuiltObjects(data);
        setShowedObjects(data);
        // get unique types for filter
        const uniqueTypes = Array.from(new Set(data.map((obj) => obj.type)));
        setTypeObjects(uniqueTypes);
      });
    }, 1000);
  }, []);

  // filter data by type
  useEffect(() => {
    if (allBuildedObjects) {
      const filtered = allBuildedObjects.filter((obj) => {
        if (selectedType === "Усі") return true;
        return obj.type === selectedType;
      });
      setShowedObjects(filtered);
    }
  }, [selectedType]);

  if (!allBuildedObjects) {
    return <img src="/loading.gif" alt="loading..." className="loading" />;
  }

  return (
    <section className="BuildObjects">
      <Container>
        <header>
          <h1 onClick={() => console.log(selectedType)}>Збудовані обʼєкти</h1>
          <div>
            {["Усі", ...typeObjects].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? "active" : ""}
              >
                {type}
                <div></div>
              </button>
            ))}
          </div>
        </header>
        {showedObjects && <BuildObjectsSlider builtObjects={showedObjects} />}
        <div>
          Завантажити ще{" "}
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0.249878C3.58579 0.249878 3.25 0.585664 3.25 0.999878V9.0946L1.54883 7.26648C1.26667 6.96354 0.792397 6.94651 0.489258 7.22839C0.186098 7.51065 0.168919 7.98578 0.451172 8.28894L3.45117 11.5106L4 12.1005L4.54883 11.5106L7.54883 8.28894C7.83108 7.98578 7.8139 7.51065 7.51074 7.22839C7.2076 6.94651 6.73333 6.96354 6.45117 7.26648L4.75 9.0946V0.999878C4.75 0.585665 4.41421 0.249879 4 0.249878Z"
              fill="#0A0F13"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
