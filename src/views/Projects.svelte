<script>
  import ProjectsTable from "../components/ProjectsTable.svelte";

  const getMaxMembers = () => Math.floor(Math.random() * 6 + 1);

  const getRandomAvatarUrl = () =>
    `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 70 + 1)}`;

  let projects = [
    {
      id: "a623a64e-146f-4e25-9fc9-14bd5ed27be6",
      name: "Social Media Campaign",
      overview: "Increase online presence and popularity.",
      members: [...Array(getMaxMembers())].map(() => ({
        avatarUrl: getRandomAvatarUrl()
      })),
      status: "Active",
      lead: {
        fullName: "Hello World",
        emailAddress: "helloworld@example.com",
        avatarUrl: getRandomAvatarUrl()
      }
    },
    {
      id: "cec834ee-2699-4697-bf64-a8589f37f02c",
      name: "Lighthouse Audit",
      overview: "Improve Lighthouse performance score.",
      members: [...Array(getMaxMembers())].map(() => ({
        avatarUrl: getRandomAvatarUrl()
      })),
      status: "In Progress",
      lead: {
        fullName: "Foo Bar",
        emailAddress: "foobar@example.com",
        avatarUrl: getRandomAvatarUrl()
      }
    },
    {
      id: "9af1193f-f443-4cb2-9f58-0eab026263e2",
      name: "Outreach Programs",
      overview: "Contact and meet domain leaders.",
      members: [...Array(getMaxMembers())].map(() => ({
        avatarUrl: getRandomAvatarUrl()
      })),
      status: "Abandoned",
      lead: {
        fullName: "Baz Qux",
        emailAddress: "bazqux@example.com",
        avatarUrl: getRandomAvatarUrl()
      }
    }
  ];
</script>

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ProjectsTable {projects} />
      </div>
    </div>
  </div>
</div>
