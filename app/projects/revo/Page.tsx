// Temporary proxy to the dynamic route. Keeping this file avoids a route clash
// by rendering the same content as /projects/[slug] for slug "revo".
import DynamicProjectPage from "../[slug]/page";

export default function RevoPage() {
  return DynamicProjectPage({ params: { slug: "revo" } });
}
