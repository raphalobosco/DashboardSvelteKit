<script>

    import CreditsBox from "../../components/CreditsBox.svelte";
   export let data
 
 </script>

 <h1>Profile</h1>

 <CreditsBox amount={data.users.credits}/>

 <div class="user-details">
    <p><strong>Name:</strong> {data.users.name}</p>
    <p><strong>Email:</strong> {data.users.email}</p>
    <p><strong>Phone:</strong> {data.users.phone}</p>
    <p><strong>Address:</strong> {data.users.address.street}, {data.users.address.city} - {data.users.address.zipcode}</p>
 </div>
