-- 코드를 입력하세요
SELECT o.ANIMAL_ID,	o.ANIMAL_TYPE , o.NAME
from ANIMAL_OUTS o
join ANIMAL_INS i on 
o.ANIMAL_ID = i.ANIMAL_ID
where i.SEX_UPON_INTAKE like 'Intact%'
and (o.SEX_UPON_OUTCOME like 'Spayed%' or o.SEX_UPON_OUTCOME like 'Neutered%')
order by o.ANIMAL_ID 