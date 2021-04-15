import Card from './Card';


const Features = () => {
  const state = [
    { iconClass: 'e627', title: 'Business Consulting' },
    { iconClass: 'e627', title: 'Market Analysis' },
    { iconClass: 'e627', title: 'User Monitoring' },
    { iconClass: 'e627', title: 'Insurance Consulting' },
    { iconClass: 'e627', title: 'Customer Satisfied' },
    { iconClass: 'e627', title: 'Plug & Play' },
  ];

  return (
    `<div class="Features">
        <h1>Features</h1>
        <div class="grid">
            ${state.map((card) => Card(card.iconClass, card.title))}
        </div>
    </div>`.replaceAll(',', '')
  );
};

export default Features;
