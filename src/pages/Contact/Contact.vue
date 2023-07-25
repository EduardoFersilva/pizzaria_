<template>
    <main>
        <div class="infos">
            <div class="loc">
                <h1>Localização</h1>
                <div class="cLoc">
                    <div class="cardLoc">
                        <h1>Rua Sete de Setembro, 182 Vila Alzira - Santo André - SP</h1>
                        <i>(ver mapa)</i>
                    </div>
                </div>
            </div>

            <div class="tel">
                <h1>Telefone</h1>
                <div class="cTel">
                    <div class="cardTel">
                        <h1>11 96696.7435</h1>
                    </div>
                </div>
            </div>
        </div>

        <form>
            <h1>Formulário</h1>
            <p>
                Sua opinião é muito importante para seguirmos evoluindo,
                envie uma mensagem que responderemos em breve!
            </p>
            <div class="cardForm">
                <div class="inputs">
                    <inputs
                    label="Nome Completo"
                    v-bind="name"
                    type="text"
                    placeholder=""
                    :width="'100%'"
                    :background="'#F7F1E8'"
                    />

                    <inputs
                    label="Telefone"
                    v-bind="telefone"
                    type="number"
                    placeholder=""
                    :width="'100%'"
                    :background="'#F7F1E8'"
                    />

                    <inputs
                    label="Email"
                    v-bind="email"
                    type="email"
                    placeholder=""
                    :width="'100%'"
                    :background="'#F7F1E8'"
                    />
                </div>
                <textarea name="textarea" id="textarea" placeholder="Mensagem"></textarea>

                <div class="divAction">
                    <p>contato@senhorapizza.com.br</p>
                    <button class="btnAction">ENVIAR</button>
                </div>

            </div>
        </form>
    </main>
</template>

<script>
import Inputs from '../../components/Inputs/Inputs.vue'

export default {
  name: 'Contact',
  components: {
    Inputs
  }
}
</script>

<style src="./Contact.scss" lang="scss" scoped />
