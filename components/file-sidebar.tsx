import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function FileTree() {
  return (
    <div className="relative flex h-screen w-1/6 flex-col items-center justify-center overflow-hidden ">
      <Tree
        className="p-2 pt-12 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ]}
        elements={ELEMENTS}
      >
        <Folder value="1" element="app">
        <File value="2">
            <p>layout.tsx</p>
        </File>
        <File value="3">
            <p>page.tsx</p>
        </File>
        </Folder>
        <Folder value="4" element="components">
        <Folder value="5" element="ui">
            <File value="6">
            <p>button.tsx</p>
            </File>
        </Folder>
        <File value="7">
            <p>header.tsx</p>
        </File>
        <File value="8">
            <p>footer.tsx</p>
        </File>
        </Folder>
        <Folder value="9" element="lib">
        <File value="10">
            <p>utils.ts</p>
        </File>
        </Folder>

        <File value="11">
            <p>components.json</p>
        </File>
        <File value="12">
            <p>tsconfig.json</p>
        </File>
        <File value="13">
            <p>package.json</p>
        </File>
        <File value="14">
            <p>README.md</p>
        </File>
        <File value="15">
            <p>tailwind.config.ts</p>
        </File>
        <File value="16">
            <p>next.config.js</p>
        </File>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
    {
    id: "1",
    isSelectable: true,
    name: "app",
    children: [
        {
        id: "2",
        isSelectable: true,
        name: "layout.tsx",
        },
        {
        id: "3",
        isSelectable: true,
        name: "page.tsx",
        },
    ],
    },
    {
    id: "4",
    isSelectable: true,
    name: "components",
    children: [
        {
        id: "5",
        isSelectable: true,
        name: "header.tsx",
        },
        {
        id: "6",
        isSelectable: true,
        name: "footer.tsx",
        },
    ],
    },
    {
    id: "7",
    isSelectable: true,
    name: "lib",
    children: [
        {
        id: "8",
        isSelectable: true,
        name: "utils.ts",
        },
    ],
    },
    {
        id: "11",
        isSelectable: true,
        name: "components.json"
    },
    {
        id: "12",
        isSelectable: true,
        name: "tsconfig.json",
    },
    {
        id: "13",
        isSelectable: true,
        name: "package.json",
    },    
    {
        id: "14",
        isSelectable: true,
        name: "README.md",
    },
    {
        id: "15",    
        isSelectable: true,
        name: "tailwind.config.ts",
    },
    {
        id: "16",
        isSelectable: true,
        name: "next.config.js",
    }
];
