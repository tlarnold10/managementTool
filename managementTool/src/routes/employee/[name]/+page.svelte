<script lang="ts">
    export let data;
    console.log(data);
</script>

<div class="container">
<h1>Employee Profile for {data.currentEmployee?.name}</h1>
    <div class="mx-auto my-20 drop-shadow rounded-md">
        <!-- The First FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Position</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>{data.currentEmployee?.position}</p>
            </div>
        </details>

        <!-- The Second FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Goals</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>NA</p>
            </div>
        </details>

        <!-- The Third FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Reviews</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>NA</p>
            </div>
        </details>
    </div>
</div>