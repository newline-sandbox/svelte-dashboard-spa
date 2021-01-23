<script>
  import { Navigate } from "svelte-router-spa";

  export let projects;
  export let currentRoute;
</script>

<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
        tracking-wider">
        Project
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
        tracking-wider">
        Members
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
        tracking-wider">
        Status
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
        tracking-wider">
        Lead
      </th>
      <th scope="col" class="relative px-6 py-3">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    {#each projects as project}
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">{project.name}</div>
          <div class="text-sm text-gray-500">{project.overview}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex -space-x-2 overflow-hidden">
            {#each project.members as member}
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={member.avatarUrl}
                alt="Member Avatar" />
            {/each}
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full
            {project.status === 'Active' ? 'bg-blue-100 text-blue-800' : ''}{project.status === 'Abandoned' ? 'bg-red-100 text-red-800' : ''}{project.status === 'Complete' ? 'bg-green-100 text-green-800' : ''}{project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}">
            {project.status}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img
                class="h-10 w-10 rounded-full"
                src={project.lead.avatarUrl}
                alt="" />
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">
                {project.lead.fullName}
              </div>
              <div class="text-sm text-gray-500">
                {project.lead.emailAddress}
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Navigate
            to="{currentRoute.path}/{project.id}"
            styles="text-indigo-600 hover:text-indigo-900"
            title="Edit Project">
            Edit
          </Navigate>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
