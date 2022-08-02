<?php 
    class Aluno {
        public $nome;
        public $nota1;
        public $nota2;
        public $nota3;
        public $media;
        public $status;

        function get_status($media) {
            if($media == 0) {
                return "Reprovado com desgosto";
            }
            if($media < 6 && $media > 0) {
                return "Reprovado";
            }
            if($media > 5 && $media < 9) {
                return "Aprovado";
            }
            if($media >8) {
                return "Aprovado com mérito";
            }
        }

        function __construct($nome, $nota1, $nota2, $nota3) {
            $this->nota1 = $nota1;
            $this->nota2 = $nota2;
            $this->nota3 = $nota3;
            $this->nome = $nome;
            $this->media = round(($nota1+$nota2+$nota3)/3);
            $this->status = $this->get_status($this->media);
        }
        
    }
   
?>