import React from "react";

function renderdata() {
  const data = [
    {
      id: 1,
      name: "Item 1",
      childs: [
        { id: 11, name: "Item 1.1" },
        { id: 12, name: "Item 1.2" },
      ],
    },
    {
      id: 2,
      name: "Item 2",
      childs: [
        { id: 21, name: "Item 2.1" },
        { id: 22, name: "Item 2.2" },
        {
          id: 23,
          name: "Item 2.3",
          childs: [
            { id: 231, name: "Item 2.3.1" },
            { id: 232, name: "Item 2.3.2" },
            { id: 233, name: "Item 2.3.3" },
            {
              id: 234,
              name: "Item 2.3.4",
              childs: [
                { id: 2341, name: "Item 2.3.4.1" },
                { id: 2342, name: "Item 2.3.4.2" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Item 3",
      childs: [{ id: 31, name: "Item 3.1" }],
    },
    {
      id: 4,
      name: "Item 4",
    },
  ];
  console.log("đây là data chính", data);

  return (
    <div>
      {data.map((i) => (
        // console.log(i.childs);
        <ul>
          <li>{i.id}</li>
          <li>
            {i.name}
            {i.childs?.map((e) => (
              <ul>
                <li>
                  {e.id} , {e.name}
                  {e.childs?.map((u) => (
                    <ul>
                      <li>
                        {u.id} , {u.name}
                        {u.childs?.map((o) => (
                          <ul>
                            <li>
                              {o.id} ,{o.name}
                            </li>
                          </ul>
                        ))}
                      </li>
                    </ul>
                  ))}
                </li>
              </ul>
            ))}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default renderdata;
