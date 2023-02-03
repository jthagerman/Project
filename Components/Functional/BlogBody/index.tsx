import { Container, Title, Subtitle } from "@/Components/Styled/BlogBody";
import ReactMarkdown from "react-markdown";
import type { BlogBodyProps } from "@/Components/Functional/BlogBody/index.d";
import { VerticalSpacer } from "@/Components/Styled/Page";

export default function BlogBody({ title, subtitle, content }: BlogBodyProps) {
  const markdown = `

  ## Atque medio illum
  
  Lorem markdownum [aequora](http://paenitet.io/). Diu sibi vellera quicquam
  visamque, capi pugnabant Romethiumque undis. Qua **huc** aliis pontus, terraeque
  saepe!
  
  > **Fas apta ferar** Occupat cinguntur et medio et viridem fessa. Miser *in*
  > similis lascive rogavit.
  
  ## Concipiunt choreas parat iam
  
  Aliter de exegit, licet ante esse, tenuique virum! Armo ante de religaret Iapeto
  eadem temerarius *debita aut*; tremor miserisque capit.Mauris elit dolor, convallis 
  in consequat et, accumsan nec magna. Quisque rutrum, diam at fringilla luctus, ipsum 
  nisl imperdiet metus, ut pharetra nulla lorem vel elit. Morbi eu facilisis odio. Aenean
  semper, nulla sit amet tincidunt gravida, sapien metus ultrices dolor, sit amet egestas
  metus lorem non orci. Integer blandit luctus ante in dapibus. Sed elementum viverra
  convallis. Aenean in nibh tristique, tempus velit id, sodales turpis. Vivamus in nulla 
  diam. Quisque elementum iaculis mi, a ultricies nisi lobortis eu. Duis ac varius ipsum. 
  Proin eros velit, mattis non massa non, ullamcorper congue mauris. Nullam felis turp
    
  ## Avus sic furit in eademque gravis reliquit
  n ante ipsum, maximus sit amet laoreet nec, blandit a elit. Ut ut tortor pretium, faucibus
   odio sit amet, mattis ipsum. Suspendisse magna nulla, venenatis pharetra malesuada id, 
   scelerisque ut urna. Vestibulum tincidunt diam sed ante placerat, eget accumsan dui molestie.
  Cras eu est iaculis, dictum augue et, varius sem. Sed malesuada velit magna, 
  eu hendrerit dui fermentum id. Praesent in malesuada odio, sed dignissim mi. 
  Curabitur sed lectus eu dui congue malesuada id in felis.


  `;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <VerticalSpacer size="1rem" />
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <VerticalSpacer size="1rem" />
    </Container>
  );
}
