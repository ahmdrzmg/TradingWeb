import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent implements OnInit {
  currencies: string[] = ['10,000', '25,000', '50,000', '100,000', '200,000'];
  currencyTypes: string[] = ['USD', 'BITCOIN'];
  currentType: string = 'USD';
  tableData: any = [];

  // Card data
  cards = [
    {
      number: '01.',
      title: 'PPF Challenge',
      text: 'An PPF Challenge is the first step of the Evaluation Process. You need to succeed here to advance into the Verification stage. Prove your trading skills and discipline in observing the Trading Objectives.',
    },
    {
      number: '02.',
      title: 'Verification',
      text: 'A Verification is the second and the last step towards becoming an PPF Trader. Once you pass a Verification stage and your results are verified, you will be offered to trade on an PPF Account.',
    },
    {
      number: '03.',
      title: 'PPF Trader',
      text: 'You are becoming an PPF Trader with an PPF Account. Trade responsibly and consistently and receive up to 90% of your profits. If you consistently generate profits on your PPF Account, we can scale your account according to our Scaling Plan.',
    },
  ];
  // tableData = [
  //   {
  //     name: 'Account Balance',
  //     values: ['10,000', '25,000', '50,000', '100,000', '200,000'],
  //   },
  //   {
  //     name: 'Trading Period',
  //     values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
  //   },
  //   {
  //     name: 'Minimum Training Days',
  //     values: ['4 Days', '4 Days', '4 Days', '4 Days', '4 Days'],
  //   },
  //   {
  //     name: 'Maximum Daily Loss',
  //     values: ['$500', '$1250', '$2500', '$5000', '$10000'],
  //   },
  //   {
  //     name: 'Maximum Loss',
  //     values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
  //   },
  //   {
  //     name: 'Profile Target',
  //     values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
  //   },
  //   {
  //     name: 'Refundable Fee',
  //     values: ['€155', '€250', '€345', '€540', '€1,080'],
  //   },
  // ];

  selectedCurrency: string | null = null; // Track selected currency
  ngOnInit(): void {
    this.changeCurrencyType(this.currentType);
  }

  // Function to handle currency button click
  handleCurrencyClick(currency: string): void {
    this.selectedCurrency = currency;
  }

  // Function to determine whether a column should be highlighted
  isColumnHighlighted(colIndex: number): boolean {
    return (
      this.selectedCurrency !== null &&
      colIndex === this.currencies.indexOf(this.selectedCurrency)
    );
  }

  changeCurrencyType(type: string) {
    this.currentType = type;
    if (this.currentType === 'USD') {
      this.tableData = [
        {
          name: 'Account Balance',
          values: ['10,000', '25,000', '50,000', '100,000', '200,000'],
        },
        {
          name: 'Trading Period',
          values: [
            'Unlimited',
            'Unlimited',
            'Unlimited',
            'Unlimited',
            'Unlimited',
          ],
        },
        {
          name: 'Minimum Training Days',
          values: ['4 Days', '4 Days', '4 Days', '4 Days', '4 Days'],
        },
        {
          name: 'Maximum Daily Loss',
          values: ['$500', '$1250', '$2500', '$5000', '$10000'],
        },
        {
          name: 'Maximum Loss',
          values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
        },
        {
          name: 'Profile Target',
          values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
        },
        {
          name: 'Refundable Fee',
          values: ['€155', '€250', '€345', '€540', '€1,080'],
        },
      ];
    } else {
      const bitcoinToUSD = 41626.96;
      this.tableData = [
        {
          name: 'Account Balance',
          values: ['10,000', '25,000', '50,000', '100,000', '200,000'],
        },
        {
          name: 'Trading Period',
          values: [
            'Unlimited',
            'Unlimited',
            'Unlimited',
            'Unlimited',
            'Unlimited',
          ],
        },
        {
          name: 'Minimum Training Days',
          values: ['4 Days', '4 Days', '4 Days', '4 Days', '4 Days'],
        },
        {
          name: 'Maximum Daily Loss',
          values: ['$500', '$1250', '$2500', '$5000', '$10000'],
        },
        {
          name: 'Maximum Loss',
          values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
        },
        {
          name: 'Profile Target',
          values: ['$1000', '$2500', '$5000', '$10000', '$20000'],
        },
        {
          name: 'Refundable Fee',
          values: ['₿0.0041', '₿0.0066', '₿0.0090', '₿0.014', '₿0.028'],
        },
      ];
    }
  }
}
