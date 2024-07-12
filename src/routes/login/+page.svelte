<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	export let form: ActionData;
  </script>
  
  <a href="/signup">Create an account</a>
  
  <div class="flex items-center justify-center h-screen">
	<Card.Root class="w-[350px]">
	  <Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Sign In.</Card.Description>
	  </Card.Header>
	  <Card.Content>
		<form method="post" use:enhance>
		  <Label for="username">Username</Label>
		  <Input name="username" id="username" /><br />
		  <Label for="password">Password</Label>
		  <Input type="password" name="password" id="password" /><br />
		  <Button type="submit">Continue</Button>
		  <p>{form?.message ?? ""}</p>
		</form>
	  </Card.Content>
	</Card.Root>
  </div>
  