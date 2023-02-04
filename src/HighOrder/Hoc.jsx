import React from "react";

const Hoc = (WrappedComponent, params) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${params}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {
      let { term, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (params === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (params === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });

      return (
        <>
          <h2>{params}</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.setState, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </>
      );
    }
  };
};

export default Hoc;
