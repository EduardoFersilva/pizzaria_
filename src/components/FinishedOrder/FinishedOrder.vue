<template>
    <main>
        <div class="content">
            <div class="card" style="width: 18rem;">
                <div class="icon">
                    <i class="bi bi-hand-thumbs-up" style="font-size: 50px; color: #fff; margin-bottom: 5px;"></i>
                </div>
                <h1>Pedido realizado com sucesso!</h1>
            </div>
            <!--
            <div class="buttons">
                <a class="btnAction1"><router-link to="/">Voltar para a Home</router-link></a>
                <a class="btnAction2"><router-link to="/historico-de-pedidos">Ver histórico de pedidos</router-link></a>
            </div>
            -->
        </div>
    </main>
</template>

<script>
export default {
  name: 'FinishedOrder'
}
</script>

<style src="./FinishedOrder.scss" lang="scss" scoped />
