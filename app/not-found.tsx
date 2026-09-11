import fs from "fs";
import path from "path";
import NotFoundSection from "../components/section/NotFound/page";
import { RepairTemplateData } from "../components/types";

export default function NotFound() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const data = fullData.common.NotFound;

  if (!data) return null;

  return <NotFoundSection data={data} />;
}
