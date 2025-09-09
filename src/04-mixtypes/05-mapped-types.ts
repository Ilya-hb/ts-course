type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type Brands = "apple" | "lenovo" | "hp" | "dell" | "microsoft";

type MyPcRecord = {
  //   [key: "a"|'B']: PcBrand;
  [BrandKey in Brands]?: PcBrand;
};

const brandRecord: MyPcRecord = {
  dell: { country: "asdasd", createdAt: new Date(), name: "asd" },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.lenovo?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};
