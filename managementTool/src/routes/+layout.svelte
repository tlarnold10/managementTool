<script>
  import "../app.css";
  // @ts-ignore
  import Header from "../components/Header.component.svelte";
  import Footer from "../components/Footer.component.svelte";
  export const prerender = true;
</script>
<Header />

<div class="container">
  <slot />
</div>

<Footer />