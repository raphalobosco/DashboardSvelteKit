<script>
	
	import CreditsBox from "./CreditsBox.svelte";
	import UserProfile from "./UserProfile.svelte";

  /**
	 * @type {{ users:  any; }}
	 */
   export let data

 
    

	
</script>

<div class="sidebar">

    <!-- {#each users as user} -->
    <UserProfile photo={data.users.photo}/>
    <!-- {/each} -->

    <div class="links">
      <a href="/">Dashboard</a>
      <a href="/account">Profile</a>
      <a href="/bookingsup">Upcoming Bookings</a>
      <a href="/bookingspast">Recent Bookings</a>
    </div>

    <CreditsBox amount={data.users.credits} />
    
  </div >

<style>
	
</style>
