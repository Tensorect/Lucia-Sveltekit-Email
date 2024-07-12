<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import type { ActionData } from "./$types";

    export let data: {
        message: string;
		message2:string;
    };
</script>

<h1>Create an account</h1>

<a href="/login">Sign in</a>

<div class="flex items-center justify-center h-screen">
    {#if data.message == undefined}
        <Card.Root class="w-[350px]">
            <Card.Header>
                <Card.Title>Registration</Card.Title>
                <Card.Description>Sign Up.</Card.Description>
            </Card.Header>
            <Card.Content>
                <form method="post" action="?/first" use:enhance>
                    <Label for="username">Username</Label>
                    <Input name="username" id="username" /><br />
                    <Label for="email">Email</Label>
                    <Input name="email" id="email" /><br />
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" /><br />
                    <Button type="submit">Continue</Button>
					{#if data.message2=="True"}
					<h1>Alert Username / E-mail already used </h1>
					{/if}
                </form>
            </Card.Content>
        </Card.Root>
    {:else}
        <Card.Root class="w-[350px]">
            <Card.Header>
                <Card.Title>Verification</Card.Title>
                <Card.Description>Enter verification password</Card.Description>
            </Card.Header>
            <Card.Content>
                <form method="post" action="?/verifyemail" use:enhance>
                    <Label for="verification-password">Verification Password</Label>
                    <Input type="password" name="verification-password" id="verification-password" /><br />
                    <Button type="submit">Continue</Button>
                </form>
            </Card.Content>
        </Card.Root>
    {/if}
</div>
