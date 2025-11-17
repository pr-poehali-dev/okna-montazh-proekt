import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const WindowCalculator = () => {
  const [windowType, setWindowType] = useState('plastic');
  const [windowCount, setWindowCount] = useState(2);
  const [glassType, setGlassType] = useState('double');
  const [installation, setInstallation] = useState(true);

  const pricePerWindow: { [key: string]: number } = {
    plastic: 8000,
    wood: 15000,
    aluminum: 12000
  };

  const glassPriceMultiplier: { [key: string]: number } = {
    single: 0.7,
    double: 1.0,
    triple: 1.4,
    energy: 1.6
  };

  const installationPrice = 3000;

  const calculateTotal = () => {
    const basePrice = pricePerWindow[windowType] * windowCount;
    const glassPrice = basePrice * glassPriceMultiplier[glassType];
    const totalInstallation = installation ? installationPrice * windowCount : 0;
    return Math.round(glassPrice + totalInstallation);
  };

  const total = calculateTotal();

  return (
    <Card className="border-2 border-primary/20 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="text-2xl flex items-center">
          <Icon name="Calculator" className="mr-3 text-primary" size={28} />
          Калькулятор стоимости
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Label className="text-base font-semibold">Тип окна</Label>
          <Select value={windowType} onValueChange={setWindowType}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="plastic">Пластиковые окна (от 8 000 ₽)</SelectItem>
              <SelectItem value="wood">Деревянные окна (от 15 000 ₽)</SelectItem>
              <SelectItem value="aluminum">Алюминиевые окна (от 12 000 ₽)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-semibold">Тип стеклопакета</Label>
          <Select value={glassType} onValueChange={setGlassType}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Однокамерный (-30%)</SelectItem>
              <SelectItem value="double">Двухкамерный (стандарт)</SelectItem>
              <SelectItem value="triple">Трехкамерный (+40%)</SelectItem>
              <SelectItem value="energy">Энергосберегающий (+60%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">Количество окон</Label>
            <span className="text-2xl font-bold text-primary">{windowCount}</span>
          </div>
          <Slider
            value={[windowCount]}
            onValueChange={(value) => setWindowCount(value[0])}
            min={1}
            max={10}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>1 окно</span>
            <span>10 окон</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="Wrench" className="text-secondary" size={24} />
            <Label className="text-base font-semibold cursor-pointer">Включить монтаж</Label>
          </div>
          <button
            onClick={() => setInstallation(!installation)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              installation ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                installation ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="border-t-2 border-gray-200 pt-6 space-y-4">
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Окна ({windowCount} шт.)</span>
              <span className="font-semibold">{(pricePerWindow[windowType] * windowCount * glassPriceMultiplier[glassType]).toLocaleString()} ₽</span>
            </div>
            {installation && (
              <div className="flex justify-between">
                <span>Монтаж ({windowCount} шт.)</span>
                <span className="font-semibold">{(installationPrice * windowCount).toLocaleString()} ₽</span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center text-2xl font-bold">
            <span>Итого:</span>
            <span className="text-primary">{total.toLocaleString()} ₽</span>
          </div>
        </div>

        <Button size="lg" className="w-full text-lg group">
          Заказать расчет
          <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          * Итоговая стоимость может измениться после замера
        </p>
      </CardContent>
    </Card>
  );
};

export default WindowCalculator;
