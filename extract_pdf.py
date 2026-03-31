import pdfplumber

pdf_path = r'd:\0225 figma\WeFun Create 创作中心功能说明文档 (PRD).pdf'
output_path = r'd:\0225 figma\credit-ui\pdf_content.txt'

with pdfplumber.open(pdf_path) as pdf:
    text_content = []
    for page in pdf.pages:
        text = page.extract_text()
        if text:
            text_content.append(text)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n\n---PAGE BREAK---\n\n'.join(text_content))

print(f"Extraction complete")
