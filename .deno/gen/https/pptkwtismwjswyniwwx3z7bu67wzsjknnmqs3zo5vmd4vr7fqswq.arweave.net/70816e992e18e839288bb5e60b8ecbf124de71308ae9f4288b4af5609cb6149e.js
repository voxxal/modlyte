import { Registry } from "./Registry.ts";
import {
  parseModule,
  sortVersions,
  versionSubstitute,
} from "../utilities/utils.ts";
export class DenoLand extends Registry {
  static domain = "deno.land";
  static async sortedVersions(module, _owner) {
    const res = await fetch(
      `https://cdn.deno.land/${module}/meta/versions.json`,
    );
    const { versions } = await res.json();
    return sortVersions(versions);
  }
  static parseURL(url) {
    const tmpSplit = url.split("/");
    const owner = "";
    const { name: xOrStd } = parseModule(tmpSplit[3]);
    if (xOrStd === "x") {
      const { name, version } = parseModule(tmpSplit[4]);
      tmpSplit[4] = `${name}@${versionSubstitute}`;
      const parsedURL = tmpSplit.join("/");
      const relativePath = tmpSplit.slice(5).join("/");
      return { name, version, parsedURL, relativePath, owner };
    }
    if (xOrStd === "std") {
      const { version } = parseModule(tmpSplit[3]);
      tmpSplit[3] = `std@${versionSubstitute}`;
      const parsedURL = tmpSplit.join("/");
      const name = "std";
      const relativePath = tmpSplit.slice(4).join("/");
      return { name, version, parsedURL, relativePath, owner };
    }
    throw new Error(`Unable to parse deno.land url: ${tmpSplit.join("/")}`);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVub0xhbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZW5vTGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE1BQU0sT0FBTyxRQUFTLFNBQVEsUUFBUTtJQUNwQyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztJQUc1QixNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDekIsTUFBYyxFQUNkLE1BQWU7UUFFZixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FDckIseUJBQXlCLE1BQU0scUJBQXFCLENBQ3JELENBQUM7UUFDRixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUtELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBVztRQUN6QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDbEIsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDN0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8saUJBQWlCLEVBQUUsQ0FBQztZQUN6QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNuQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzFEO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQyJ9