<script>
    import "../app.css";
	import Footer from "../components/UI/Footer.svelte";
	import Header from "../components/UI/Header.svelte";
	import ScrollTopButton from "../components/UI/ScrollTopButton.svelte";
  </script>
  
<Header/>
<slot />
<Footer />
<ScrollTopButton />