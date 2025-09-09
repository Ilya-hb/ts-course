interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      desc: string;
      links: string[];
    };
    footer: {
      desc: string;
      links: string[];
    };
    body: [{ title: string; content: {} }];
  };
}

type T0 = DataModel["elements"]["footer"];

type someTuple = [number, string, boolean, ...string[]];

const arr: someTuple = [1, "1", false, "asd", "asd", "d"];

type T1 = someTuple[0];

const sizes = ["small", "medium", "large"] as const;

type T2 = (typeof sizes)[number];
