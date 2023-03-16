<script>
	import CreditsBox from "../components/CreditsBox.svelte";
	import UserProfile from "../components/UserProfile.svelte";
    import usersData from "../data/data.json"

    const users = usersData.users[0]
    const name = 'Aline'
    

	
</script>

<div class="sidebar">

    <!-- {#each users as user} -->
    <UserProfile name={users.name} email={users.email} photo={users.photo} />
    <!-- {/each} -->

    <div class="links">
      <a href="/">Dashboard</a>
      <a href="/account">Profile</a>
      <a href="/bookingsup">Upcoming Bookings</a>
      <a href="/bookingspast">Recent Bookings</a>
    </div>

    <CreditsBox amount={10} />
    
  </div >

<style>
	
</style>
